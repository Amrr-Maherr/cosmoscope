// components/Footer.js
import Link from "next/link";
import { Github } from "lucide-react"; // أيقونة اختيارية لمستودع الكود

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 border-t border-gray-700 mt-auto">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* قسم المحتوى الرئيسي (شبكة) */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4 xl:gap-16">
          {/* العمود 1: العلامة التجارية والإسناد */}
          <div className="md:col-span-1 lg:col-span-1">
            <Link
              href="/"
              className="text-xl font-semibold text-white hover:text-gray-300 transition-colors"
            >
              CosmoScope
            </Link>
            <p className="mt-3 text-sm leading-6">
              Your portal to the wonders of space, powered by NASA's open data.
            </p>
            <div className="mt-4">
              <p className="text-xs text-gray-500">Data source:</p>
              <a
                href="https://api.nasa.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-sky-500 hover:text-sky-400 transition-colors"
              >
                NASA Open APIs
              </a>
            </div>
          </div>

          {/* أعمدة الروابط (استخدام أعمدة منفصلة للتنظيم) */}
          <div className="grid grid-cols-2 gap-8 md:col-span-2 lg:col-span-3 lg:grid-cols-3">
            {/* العمود 2: اكتشف */}
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">
                Discover
              </h3>
              <ul role="list" className="mt-4 space-y-3">
                <li>
                  <Link
                    href="/apod"
                    className="text-sm leading-6 hover:text-white transition-colors"
                  >
                    Picture of the Day
                  </Link>
                </li>
                <li>
                  <Link
                    href="/neos"
                    className="text-sm leading-6 hover:text-white transition-colors"
                  >
                    Near Earth Objects
                  </Link>
                </li>
                {/* أضف روابط اكتشاف أخرى هنا */}
                <li>
                  <Link
                    href="/apod/archive"
                    className="text-sm leading-6 hover:text-white transition-colors"
                  >
                    APOD Archive{" "}
                    <span className="text-xs text-gray-500">(soon)</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* العمود 3: المشروع */}
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">
                Project
              </h3>
              <ul role="list" className="mt-4 space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-sm leading-6 hover:text-white transition-colors"
                  >
                    About CosmoScope
                  </Link>
                </li>
                <li>
                  {/* رابط لمستودع GitHub إذا كان المشروع مفتوح المصدر */}
                  <a
                    href="https://github.com/your-username/cosmoscope" // استبدل بالرابط الفعلي
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm leading-6 hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    <Github className="h-4 w-4 opacity-70" /> Source Code
                  </a>
                </li>
                <li>
                  <Link
                    href="/feedback"
                    className="text-sm leading-6 hover:text-white transition-colors"
                  >
                    Feedback{" "}
                    <span className="text-xs text-gray-500">(soon)</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* العمود 4: قانوني */}
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">
                Legal
              </h3>
              <ul role="list" className="mt-4 space-y-3">
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm leading-6 hover:text-white transition-colors"
                  >
                    Privacy Policy{" "}
                    <span className="text-xs text-gray-500">(TBD)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-sm leading-6 hover:text-white transition-colors"
                  >
                    Terms of Service{" "}
                    <span className="text-xs text-gray-500">(TBD)</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* قسم حقوق النشر */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-xs leading-5 text-gray-500">
            © {new Date().getFullYear()} CosmoScope. Built with passion and
            APIs.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
