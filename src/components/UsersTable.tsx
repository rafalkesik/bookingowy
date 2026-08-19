import { prisma } from "@/lib/prisma"

export async function UsersTable() {
  const users = await prisma.user.findMany();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nazwa</th>
            <th>E-mail</th>
            <th>Rola</th>
            <th>Utworzono</th>
            <th>Identyfikator</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, index) => (
              <tr key={ "row-" + index }>
                <td>{ user.name }</td>
                <td>{ user.email }</td>
                <td>{ user.role }</td>
                <td>{ user.createdAt.toLocaleDateString("pl") }</td>
                <td>{ user.id }</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}