import { ServerUIProvider } from "@/components/ServerContext";
import { ServerComponents } from "@/components/ServerComponents";
import { ServerUIState } from "@/components/ServerUIState";
import { ButtonQueryParam } from "@/components/ui/button-query-param";
const licenseOptions = [
  {
    value: "standard",
    text: "Standard",
  },
  {
    value: "enhanced",
    text: "Enhanced",
  },
];

const sizeOptions = [
  {
    value: "large",
    text: "Large",
  },
  {
    value: "medium",
    text: "Medium",
  },
  {
    value: "small",
    text: "Small",
  },
];

const serverUI = {
  initState: {
    license: "standard",
    size: "large",
  },
  displayComponents: [
    {
      type: "Text",
      props: { text: "test my text" },
    },
    {
      type: "RadioSelector",
      props: { options: licenseOptions, stateId: "license" },
    },
    {
      type: "Switch",
      props: {
        switchValue: "license",
        options: [
          {
            value: "standard",
            type: "licensing-option-list",
            props: {
              stateId: "licensePack",
              options: [
                {
                  value: "10",
                  mainText: "10 images",
                  subText: "$299",
                  subTextExtra: "/yr",
                  endText: "$2.49",
                  endSubText: "per image",
                },
                {
                  value: "50",
                  mainText: "50 images",
                  subText: "$979",
                  subTextExtra: "/yr",
                  endText: "$1.63",
                  endSubText: "per image",
                },
                {
                  value: "350",
                  mainText: "350 images",
                  subText: "$1649",
                  subTextExtra: "/yr",
                  endText: "$0.39",
                  endSubText: "per image",
                },
              ],
            },
          },
          {
            value: "enhanced",
            type: "licensing-option-list",
            props: {
              stateId: "licensePack",
              options: [
                {
                  value: "2",
                  mainText: "2 images",
                  subText: "$199",
                  subTextExtra: "/yr",
                  endText: "$99.50",
                  endSubText: "per image",
                },
                {
                  value: "5",
                  mainText: "5 images",
                  subText: "$449",
                  subTextExtra: "/yr",
                  endText: "$89.80",
                  endSubText: "per image",
                },
                {
                  value: "25",
                  mainText: "25 images",
                  subText: "$1699",
                  subTextExtra: "/yr",
                  endText: "$67.96",
                  endSubText: "per image",
                },
              ],
            },
          },
        ],
      },
    },
  ],
};
const Page = (props: any) => {
  console.log("🚀 ~ Page ~ props:", props);

  const { searchParams } = props;

  const serverComponents = searchParams?.comp === "1" ? serverUI : {};
  return (
    <div className="container flex">
      <div className=" flex-1">
        <pre>{JSON.stringify(serverComponents, null, 2)}</pre>
      </div>
      <div className="flex-1">
        <ServerUIProvider initialState={serverUI.initState}>
          <ButtonQueryParam queryParam={"comp"} queryParamValue="1">
            first
          </ButtonQueryParam>
          <ButtonQueryParam queryParam={"comp"} queryParamValue="2">
            second
          </ButtonQueryParam>
          <div className="flex flex-col gap-3 container mx-auto mt-4">
            <ServerComponents value={serverComponents.displayComponents} />
          </div>
          <ServerUIState />
        </ServerUIProvider>
      </div>
    </div>
  );
};

export default Page;
