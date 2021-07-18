/* eslint-disable react/jsx-no-duplicate-props */
import { Disclosure } from '@headlessui/react';
import React, { useEffect } from 'react';
import logo from '../images/logo-transparent.png';
import logoScroll from '../images/logoScroll.png';
const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'About Us', href: '#', current: false },
  { name: 'Our Pricing', href: '#', current: false },
  { name: 'Portfolio', href: '#', current: false },
  { name: 'Our Blog', href: '#', current: false },
  { name: 'Contact Us', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  
  const [scrolled,setScrolled]=React.useState(false);

  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 0 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })
  let headerlogo = logo;
  let x=['navbar'];
  if(scrolled){
    x.push('scrolled');
    headerlogo = logoScroll;
  }
  return (
    <Disclosure as="header" className="header">
      {({ open }) => (
        <nav
         
        className={x.join(" ")}>
        
        <div className="container mx-auto">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className=" h-8 w-auto"
                  src={headerlogo}
                  alt="Workflow"
                />
              </div>
              <div className="hidden ml-auto sm:block sm:ml-6">
                <ul className="flex space-x-4">
                  {navigation.map((item) => (
                    <li>
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? '' : '',
                          '',
                        )}
                        aria-current={
                          item.current ? 'page' : undefined
                        }
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <ul className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <li>
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? ''
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium',
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </Disclosure.Panel>
        </nav>
      )}
    </Disclosure>
  );
}
