import { Separator } from "@/components/ui/Separator";
import Link from 'next/link';

export default function Footer({ locale, menuItems }) {
  // console.log('locale:', locale);
  // console.log('menuItems:', JSON.stringify(menuItems, null, 2));

  // 将前两个项目挪到第二列
  const firstColumnItems = menuItems.slice(3);
  const secondColumnItems = menuItems.slice(0, 3);
  return (
    <footer className="py-12 px-4">
      <div className="flex w-full justify-center">
        <Separator className="mb-20 h-[2px] w-[95%] bg-primary justify-center dark:bg-[#C0CFB2]" />
      </div>
      <div className="container mx-auto flex flex-wrap justify-between px-6 md:px-12">
        <div className="w-full md:w-1/4 mb-6 md:mb-0 order-4 md:order-1">
          <div className="flex flex-wrap justify-center md:justify-start">
            <a href="#" className="bg-primary text-primary-dark hover:text-primary-light flex justify-center align-middle items-center rounded-full dark:bg-[#242423] min-w-10 h-10 p-2 aspect-square mr-4 mb-4">
              <svg className="object-contain w-full h-full" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.8333 0H8.16669C6.00106 0.0029998 3.926 0.887998 2.39459 2.46301C0.863331 4.03802 0.00294933 6.17252 0 8.40002V27.6C0.00291647 29.8275 0.863331 31.9618 2.39459 33.537C3.92585 35.112 6.00106 35.997 8.16669 36H26.8333C28.9989 35.997 31.074 35.112 32.6054 33.537C34.1367 31.962 34.9971 29.8275 35 27.6V8.40002C34.9971 6.17252 34.1367 4.03817 32.6054 2.46301C31.0741 0.887998 28.9989 0.00303359 26.8333 0ZM32.6666 27.5999C32.6652 29.1899 32.0498 30.7154 30.956 31.8404C29.8623 32.9654 28.3792 33.5984 26.8333 33.5999H8.16669C6.62087 33.5984 5.13773 32.9654 4.04398 31.8404C2.95022 30.7154 2.33482 29.19 2.33337 27.5999V8.39998C2.33482 6.81 2.95022 5.28448 4.04398 4.15948C5.13773 3.03448 6.62083 2.40149 8.16669 2.4H26.8333C28.3791 2.40149 29.8623 3.03448 30.956 4.15948C32.0498 5.28448 32.6652 6.80996 32.6666 8.39998V27.5999ZM17.5 9.59998C15.3344 9.59998 13.2563 10.485 11.7249 12.06C10.1935 13.6349 9.33328 15.7725 9.33328 18C9.33328 20.2276 10.1937 22.365 11.7249 23.9401C13.2561 25.5153 15.3343 26.4001 17.5 26.4001C19.6657 26.4001 21.7437 25.5151 23.2751 23.9401C24.8065 22.3652 25.6667 20.2276 25.6667 18C25.6638 15.7725 24.8034 13.6382 23.2721 12.063C21.7409 10.488 19.6656 9.60301 17.5 9.59998ZM17.5 24C15.9527 24 14.4696 23.3685 13.3758 22.242C12.2806 21.117 11.6666 19.5915 11.6666 17.9999C11.6666 16.4084 12.2806 14.8829 13.3758 13.7579C14.4695 12.6314 15.9526 11.9999 17.5 11.9999C19.0473 11.9999 20.5304 12.6314 21.6242 13.7579C22.7194 14.8829 23.3334 16.4084 23.3334 17.9999C23.3319 19.5899 22.7165 21.1154 21.6227 22.2404C20.529 23.3654 19.0459 23.9985 17.5 24ZM29.4582 7.79979C29.4582 8.64878 28.9609 9.41528 28.1982 9.7393C27.4355 10.0648 26.5562 9.8848 25.9728 9.28479C25.3895 8.68479 25.2145 7.78028 25.5309 6.99581C25.8459 6.2113 26.5911 5.69982 27.4166 5.69982C28.5438 5.69982 29.4582 6.64027 29.4582 7.79979Z" fill="#C0CFB1" />
              </svg>
            </a>
            <a href="#" className="bg-primary text-primary-dark hover:text-primary-light flex justify-center align-middle items-center rounded-full dark:bg-[#242423] min-w-10 h-10 p-2 aspect-square mr-4 mb-4">
              <svg className="object-contain w-full h-full" viewBox="0 0 23 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5738 8.57143H22.1117C22.5989 8.57143 22.9962 8.18638 22.9962 7.71429V0.857143C22.9962 0.385029 22.5989 0 22.1117 0H16.8049C11.441 0 7.07575 4.23047 7.07575 9.42857V13.7829H0.884469C0.397303 13.7829 0 14.1679 0 14.64V21.4286C0 21.9007 0.397321 22.2857 0.884469 22.2857H6.4606V35.1429C6.4606 35.615 6.85792 36 7.34507 36H14.7299C15.2171 36 15.6144 35.615 15.6144 35.1429V22.2857H20.2667C20.6692 22.2857 21.0233 22.0246 21.1253 21.6429L22.9702 14.7857C23.0411 14.5279 22.984 14.255 22.8148 14.0441C22.6472 13.8348 22.3898 13.7093 22.1169 13.7093H15.9256V11.1378C15.9256 9.71985 17.1158 8.56639 18.579 8.56639L18.5738 8.57143ZM15.036 15.4286H20.9663L19.5826 20.5714H14.7269C14.2397 20.5714 13.8424 20.9565 13.8424 21.4286V34.2857H8.22649V21.4286C8.22649 20.9565 7.82917 20.5714 7.34202 20.5714H1.76589V15.4971H7.95717C8.44433 15.4971 8.84164 15.1121 8.84164 14.64V9.42857C8.84164 5.17633 12.4106 1.71429 16.8019 1.71429H21.2242V6.85714H18.5708C16.1333 6.85714 14.1484 8.7807 14.1484 11.1429V14.5714C14.1484 15.0435 14.5458 15.4286 15.0329 15.4286H15.036Z" fill="#C0CFB1" />
              </svg>

            </a>
            <a href="#" className="bg-primary text-primary-dark hover:text-primary-light flex justify-center align-middle items-center rounded-full dark:bg-[#242423] min-w-10 h-10 p-2 aspect-square mr-4 mb-4">
              <svg className="object-contain w-full h-full" viewBox="0 0 31 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.6283 4.1651C30.4053 4.02627 30.1823 4.02627 29.9592 4.09569C28.1007 4.85929 26.1679 4.30394 25.0528 2.91557C24.5324 2.29081 24.235 1.45779 24.235 0.694184C24.235 0.485929 24.1607 0.347092 24.012 0.208255C23.8633 0.0694182 23.7146 0 23.4916 0H15.9089C15.4628 0 15.1655 0.277674 15.1655 0.694184V25.3377C15.1655 25.4071 15.1655 25.4071 15.1655 25.4765C15.0168 26.7261 13.976 27.6285 12.6379 27.6285C11.2254 27.6285 10.036 26.5178 10.036 25.1989C10.036 23.9493 11.0024 22.9775 12.3405 22.8386C12.7122 22.7692 13.0096 22.4916 13.0096 22.1445V14.0919C13.0096 13.6754 12.7122 13.3977 12.2662 13.3977C12.2662 13.3977 12.1918 13.3977 12.1175 13.3977C5.27818 13.6754 0 18.8124 0 25.1989C0 31.7242 5.64988 37 12.6379 37C19.1799 37 24.6811 32.2795 25.2014 26.2402C25.2758 26.1707 25.2758 26.0319 25.2758 25.9625V12.5647C26.9113 12.9118 28.6211 13.0507 30.4053 12.773C30.777 12.7036 31 12.4259 31 12.0788V4.72045C31 4.5122 30.8513 4.30394 30.6283 4.1651ZM29.5132 11.5235C27.8034 11.6623 26.2422 11.5235 24.6811 11.0375C24.458 10.9681 24.235 11.0375 24.012 11.1069C23.789 11.2458 23.7146 11.454 23.7146 11.6623V25.6848C23.7146 25.7542 23.7146 25.8236 23.6403 25.8931C23.2686 31.3077 18.3621 35.6116 12.5635 35.6116C6.39329 35.6116 1.41247 30.9606 1.41247 25.1989C1.41247 19.7842 5.72422 15.3415 11.4484 14.8555V21.5891C9.73861 22.075 8.47482 23.5328 8.47482 25.1989C8.47482 27.2814 10.3333 29.0169 12.5635 29.0169C14.5707 29.0169 16.2806 27.6285 16.5779 25.8236C16.6523 25.7542 16.6523 25.6154 16.6523 25.546V1.38837H22.8225C22.9712 2.29081 23.3429 3.05441 23.8633 3.74859C25.1271 5.34522 27.3573 6.17824 29.5132 5.69231V11.5235Z" fill="#C0CFB1" />
              </svg>

            </a>
            <a href="#" className="bg-primary text-primary-dark hover:text-primary-light flex justify-center align-middle items-center rounded-full dark:bg-[#242423] min-w-10 h-10 p-2 aspect-square mr-4 mb-4">
              <svg className="object-contain w-full h-full" viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_558_192)">
                  <path d="M3.98863 0C1.67753 0 0 1.48491 0 3.53048C0 5.57481 1.64431 7.05869 3.90918 7.05869C5.08389 7.05869 6.09607 6.70399 6.83653 6.03249C7.54673 5.38836 7.9383 4.49981 7.93756 3.51435C7.88555 1.44521 6.26149 0 3.98863 0ZM5.80489 5.04434C5.34615 5.46039 4.69018 5.68013 3.90918 5.68013C2.47872 5.68013 1.47958 4.79634 1.47958 3.53048C1.47958 2.24353 2.48812 1.37856 3.98863 1.37856C5.45595 1.37856 6.42476 2.22968 6.45798 3.53083C6.45798 4.12492 6.22607 4.66234 5.80489 5.04434Z" fill="#C0CFB1" />
                  <path d="M0.708984 30.9999H7.35842V8.22314H0.708984V30.9999ZM2.18856 9.6017H5.87884V29.6214H2.18856V9.6017Z" fill="#C0CFB1" />
                  <path d="M24.8936 8.22314C21.8102 8.22314 19.9224 9.2146 18.8286 10.1473L18.6206 8.22314H11.0977V30.9999H18.4652V19.0287C18.4652 18.5132 18.6891 17.4425 18.8301 17.1598C19.7201 15.3737 20.9208 15.3737 22.7392 15.3737C24.8336 15.3737 26.6029 17.2036 26.6029 19.3694V30.9999H34.0008V18.1308C34.0008 11.3235 29.2796 8.22314 24.8936 8.22314ZM32.5212 29.6214H28.0825V19.3694C28.0825 16.4561 25.6355 13.9952 22.7392 13.9952C20.8811 13.9952 18.7751 13.9952 17.4877 16.5796C17.2218 17.1137 16.9856 18.394 16.9856 19.0287V29.6214H12.5772V9.6017H17.2826L17.5846 12.3894H18.7968L19.0135 12.0636C19.507 11.3235 21.0675 9.6017 24.8936 9.6017C28.5673 9.6017 32.5212 12.2706 32.5212 18.1308V29.6214Z" fill="#C0CFB1" />
                </g>
              </svg>
            </a>
            <a href="#" className="bg-primary text-primary-dark hover:text-primary-light flex justify-center align-middle items-center rounded-full dark:bg-[#242423] min-w-10 h-10 p-2 aspect-square mr-4 mb-4">
              <svg className="object-contain w-full h-full" viewBox="0 0 41 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38.0758 2.19316C37.1645 1.49294 35.7325 1.26756 33.7174 1.13156C30.795 0.935711 25.8354 0.818359 20.4506 0.818359C15.0657 0.818359 10.1069 0.934934 7.1853 1.13156C5.17022 1.26756 3.73821 1.49294 2.82772 2.19316C2.19889 2.67734 1.43042 3.61382 1.0738 6.59269C0.600402 10.557 0.600402 19.597 1.0738 23.5629C1.43042 26.5378 2.1981 27.4759 2.82614 27.9593C3.73742 28.6626 5.17023 28.888 7.18609 29.024C10.1235 29.2191 15.0823 29.3364 20.4506 29.3364C25.8189 29.3364 30.7792 29.2198 33.7174 29.024C35.7325 28.8888 37.1653 28.6634 38.0782 27.9585C38.7062 27.4712 39.4739 26.5309 39.8266 23.5629C40.3023 19.597 40.3023 10.5562 39.8266 6.59269C39.4739 3.62082 38.7062 2.68122 38.0758 2.19316ZM38.2596 23.3818C38.0458 25.1786 37.6561 26.3078 37.1038 26.736C36.4757 27.221 34.9853 27.3811 33.6109 27.4736C30.7059 27.6671 25.7865 27.7821 20.4506 27.7821C15.1154 27.7821 10.1961 27.6671 7.29261 27.4736C5.9174 27.3811 4.427 27.221 3.79817 26.736C3.24509 26.3101 2.85612 25.1817 2.63994 23.3818C2.1768 19.5006 2.1768 10.6542 2.63994 6.77455C2.85533 4.97231 3.24509 3.84309 3.79738 3.41875C4.42621 2.93536 5.9174 2.77526 7.29182 2.682C10.1803 2.48849 15.0997 2.37269 20.4498 2.37269C25.8007 2.37269 30.7208 2.48849 33.6085 2.682C34.9845 2.77526 36.4749 2.93536 37.1022 3.4172C37.6561 3.84542 38.045 4.97464 38.2588 6.77455C38.7259 10.6542 38.7259 19.5006 38.2596 23.3818Z" fill="#C0CFB1" />
                <path d="M27.6726 14.3878L16.2433 8.51868C15.998 8.39278 15.706 8.40133 15.4693 8.54355C15.2334 8.68421 15.0898 8.93602 15.0898 9.20802V20.9471C15.0898 21.2191 15.2342 21.4709 15.4693 21.6116C15.5948 21.687 15.7368 21.7243 15.8788 21.7243C16.0043 21.7243 16.1289 21.6947 16.2433 21.6364L27.6726 15.7657C27.9338 15.6321 28.0971 15.3663 28.0971 15.0764C28.0971 14.7865 27.933 14.5215 27.6726 14.3878ZM16.667 19.6655V10.4896L25.6008 15.0772L16.667 19.6655Z" fill="#C0CFB1" />
              </svg>
            </a>
          </div>
        </div>
        {/* 第一列 */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0 order-3">
          <ul className="space-y-2">
            {firstColumnItems.map((item, index) => (
              <li key={index}>
                {item.dropdownItems && item.dropdownItems.length > 0 ? (
                  <ul className="space-y-2">
                    {item.dropdownItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={subItem.href}
                          locale={locale}
                          className="text-primary hover:text-[#AABB99] dark:text-[#ffffff] dark:hover:text-[#C0CFB2]"
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Link
                    href={item.href}
                    locale={locale}
                    className="text-primary hover:text-[#AABB99] dark:text-[#ffffff] dark:hover:text-[#C0CFB2]"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* 第二列 */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0 order-2">
          <ul className="space-y-2">
            {secondColumnItems.map((item, index) => (
              <li key={index}>
                {item.dropdownItems && item.dropdownItems.length > 0 ? (
                  <ul className="space-y-2">
                    {item.dropdownItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={subItem.href}
                          locale={locale}
                          className="text-primary hover:text-[#AABB99] dark:text-[#ffffff] dark:hover:text-[#C0CFB2]"
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Link
                    href={item.href}
                    locale={locale}
                    className="text-primary hover:text-[#AABB99] dark:text-[#ffffff] dark:hover:text-[#C0CFB2]"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:w-auto flex items-end justify-end order-4">
          <div
            className="w-[200px] h-[60px] bg-contain bg-no-repeat"
            style={{ backgroundImage: 'var(--footer-logo-url)' }}
            aria-label="Footer Logo"
          ></div>
        </div>
      </div>
    </footer>
  );
}



