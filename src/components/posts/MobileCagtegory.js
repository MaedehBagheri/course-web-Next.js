import Link from "next/link";
import { useRouter } from "next/router";

const MobileCagtegory = ({ postCategories }) => {
  const { query } = useRouter();

  return (
    <div className="flex md:hidden gap-x-4 overflow-auto pb-5 mb-4">
      <Link href={`/blogs`}>
        <a
          className={`block border border-gray-500 bg-white rounded-3xl px-3 py-1 text-gray-500 whitespace-nowrap text-sm ${
            !query.categorySlug ? "border-2 border-purple-700 text-purple-700 bg-purple-100 " : ""
          }}`}
        >
          همه مقالات
        </a>
      </Link>
      {postCategories.map((category) => {
        return (
          <Link href={`/blogs/${category.englishTitle}`} key={category._id}>
            <a
              className={`block border border-gray-500 bg-white rounded-3xl px-3 py-1 text-gray-500 whitespace-nowrap text-sm ${
                query.categorySlug === category.englishTitle
                  ? "border-2 border-purple-700 text-purple-700 bg-purple-100 "
                  : ""
              }`}
            >
              {category.title}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default MobileCagtegory;
