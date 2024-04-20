import Cards from "./Cards";

export default function IpDetails({ geoData }: any) {
  const data = geoData;

  return (
    <div className="w-full flex flex-col gap-4 justify-between py-6 md:flex-row">
      {data && (
        <>
          <Cards title="IP Address" desciption={data?.ip} />
          <Cards title="Location" desciption={data?.location?.region} />
          <Cards
            title="Timezone"
            desciption={`UTC ${data?.location?.timezone}`}
          />
          <Cards title="ISP" desciption={data?.isp} />
        </>
      )}
    </div>
  );
}
