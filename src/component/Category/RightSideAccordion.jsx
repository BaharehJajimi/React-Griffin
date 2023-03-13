import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function RightSideAccordion({
  categoryList,
  accordionCategory,
  selectedItem,
  onSelectItem,
  productDatas,
  accordionCat,
}) {
  return (
    <div className="">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
      <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="mb-2 flex w-full justify-between rounded-md bg-orange-300 px-4 py-2 text-left text-sm font-medium text-blue-700 hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75">
                      <span>
                        {" "}
                        <h5 className="font-bold text-blue-900">{accordionCat}</h5>
                      </span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      <ul className="list-group">
                        {productDatas.map((CaList, index) => (
                          <li
                            role="button"
                            onClick={() => onSelectItem(CaList)}
                            key={index}
                            id={CaList.id}
                            className={
                              CaList === selectedItem
                                ? "py-2 px-3 rounded-lg hover:bg-orange-300"
                                : "py-2 px-3 rounded-lg hover:bg-orange-300"
                            }
                          >
                            {CaList.courseName}
                          </li>
                        ))}
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-orange-300 px-4 py-2 text-left text-sm font-medium text-blue-700 hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75">
                <span>
                  <h5 className="font-bold text-blue-900">{accordionCategory}</h5>
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-gray-500`}
                />
              </Disclosure.Button>

              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <ul className="list-group">
                  {categoryList.map((CaList, index) => (
                    <li
                      role="button"
                      onClick={() => onSelectItem(CaList)}
                      key={index}
                      id={CaList.id}
                      className={
                        CaList === selectedItem
                          ? "py-2 px-3 rounded-lg hover:bg-orange-300"
                          : "py-2 px-3 rounded-lg hover:bg-orange-300"
                      }
                    >
                      {CaList.name}
                    </li>
                  ))}
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
