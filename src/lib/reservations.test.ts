import getReservations from "./reservations";

describe("getReservations", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  })

  it("throws error if the fetch response is not ok",
     async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false
      });
 
      await expect(getReservations()).rejects.toThrow(
       "Failed to fetch reservations from Hostex"
      );
     }
  );

  it("calls Hostex API with correct url and headers",
    async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          data: { reservations: [] }
        }),
      });

      await getReservations();

      expect(global.fetch).toHaveBeenCalledWith(
        "https://api.hostex.io/v3/reservations?order_by=check_in_date&limit=100",
        expect.objectContaining({
          method: "GET",
          headers: expect.objectContaining({
            accept: "application/json",
          }),
        }),
      );
    }
  );

  it("returns reservations in reverse order",
    async () => {
      const mockReservations = [{id: 3}, {id: 2}, {id: 1}];

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          data: { reservations: mockReservations }
        }),
      });

      const result = await getReservations();

      expect(result).toEqual([{id: 1}, {id: 2}, {id: 3}]);
    }
  );

  it("throws error if HOSTEX_API_TOKEN is missing",
    async () => {
      const originalToken = process.env.HOSTEX_API_TOKEN;
      delete process.env.HOSTEX_API_TOKEN;

      jest.resetModules();
      const { default: getReservations } = await import('./reservations');

      await expect(getReservations()).rejects.toThrow(
        "Missing HOSTEX_API_TOKEN environment variable"
      );
    }
  );
});