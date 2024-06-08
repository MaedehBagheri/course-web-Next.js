import { ChevronDownIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const DesktopCategory = ({ postCategories }) => {
  const [isOpen, setIsOpen] = useState(true);
  const { query } = useRouter();

  return (
    <div className="bg-white rounded-3xl overflow-hidden sticky top-24">
      {/* accordion header */}
      <div
        className="flex items-center justify-between py-4 px-4 cursor-pointer bg-purple-200 "
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>دسته بندی مقالات</span>
        <ChevronDownIcon
          className={`w-6 h-6 stroke-purple-400 transition-all duration-200
    ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </div>
      {/* accordion content */}
      <div className={`${isOpen ? "block" : "hidden"}`}>
        <Link href="/blogs">
          <a
            className={`block pr-4 py-2 hover:bg-purple-50 mb-1 ${
              !query.categorySlug ? "bg-purple-700 text-white hover:bg-purple-500" : ""
            }`}
          >
            همه مقالات
          </a>
        </Link>
        {postCategories.map((category) => {
          return (
            <Link href={`/blogs/${category.englishTitle}`} key={category._id}>
              <a
                className={`block pr-4 py-2 hover:bg-purple-50 mb-1 ${
                  query.categorySlug === category.englishTitle
                    ? "bg-purple-700 text-white hover:bg-purple-500"
                    : ""
                }`}
              >
                {category.title}
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DesktopCategory;
