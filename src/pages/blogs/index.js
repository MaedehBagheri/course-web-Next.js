import axios from "axios";
import PostList from "@/components/posts/PostList";
import MobileCagtegory from "@/components/posts/MobileCagtegory";
import SortBar from "@/components/posts/sortBar";
import DesktopCategory from "@/components/posts/CategoryDesktop";
import Layout from "@/containers/Layout";
import http from "@/services/httpService";
import queryString from "query-string";
import Pagination from "@mui/material/Pagination";
import { useRouter } from "next/router";
import routerPush from "@/utils/routerPush";
import PaginationComponent from "@/common/Pagination";

export default function BlogPage({ blogsData, postCategories }) {
  return (
    <Layout>
      <div className="container mx-auto lg:max-w-screen-xl px-4 md:px-0">
        <MobileCagtegory postCategories={postCategories} />
        <div className="grid gap-8 md:grid-cols-12 md:grid-rows-[60px_minmax(300px,_1fr)] min-h-screen">
          <div className="hidden md:block md:row-span-2 md:col-span-3">
            <DesktopCategory postCategories={postCategories} />
          </div>
          <div className="hidden md:block md:col-span-9">
            <SortBar />
          </div>
          <div className="md:col-span-9 grid grid-cols-6 gap-8">
            <PostList blogsData={blogsData.docs} />
            <PaginationComponent page={blogsData.page} totalPages={blogsData.totalPages} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req, query }) {
  const { data: result } = await http.get(`/posts?${queryString.stringify(query)}`, {
    headers: {
      Cookie: req.headers.cookie || "",
    },
  });
  const { data: postCategories } = await http.get("/post-category");
  const { data } = result;

  return {
    props: {
      blogsData: data,
      postCategories: postCategories.data,
    },
  };
}
