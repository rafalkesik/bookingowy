import { auth } from "@/lib/auth/auth";

async function main() {
  const result = await auth.api.createUser({
    body: {
      name: 'Admin',
      email: 'admin@user.com',
      password: '',
      role: 'admin'
    },
  });

  console.log(result);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });