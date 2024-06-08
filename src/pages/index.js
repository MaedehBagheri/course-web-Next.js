import Layout from "@/containers/Layout";
import { useSelector } from "react-redux";
const HomePage = () => {
  const userInfo = useSelector((state) => state.userSignin);
  const { user } = userInfo;

  return (
    <Layout>
      <div className="container mx-auto lg:max-w-screen-xl">
        <h1 className="text-2xl font-black">
          {user && <span className="ml-2">سلام {user.name}،</span>}
          <span>به Next-App خوش آمدی!</span>
        </h1>
      </div>
    </Layout>
  );
};

export default HomePage;
