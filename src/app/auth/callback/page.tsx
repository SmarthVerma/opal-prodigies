import { onAuthenticatedUser } from "@/actions/user";
import { redirect } from "next/navigation";

const AuthCallbackPage = async () => {
  const auth = await onAuthenticatedUser();
  if (auth.status === 200 || auth.status === 201) {
    return redirect(
      `/dashboard/${auth.user?.workspace[0].id}${auth.user?.lastname}`
    );
  }
  if (auth.status === 400 || auth.status === 500 || auth.status === 404) {
    return redirect("/auth/sign-in");
  }
  return <div>page</div>;
};
export default AuthCallbackPage;
