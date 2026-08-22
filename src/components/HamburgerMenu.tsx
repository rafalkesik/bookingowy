export default function HamburgerMenu() {
  return (
    <>
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        className="checkbox hidden"
      />
      <label htmlFor="checkbox" className="hamburger-label">
        <img
          src="/hamburger.svg"
          alt="Rozwiń pasek nawigacyjny"
          className="h-8 inline"
        />
      </label>
    </>
  )
}