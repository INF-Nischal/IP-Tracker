import Cards from "./Cards";

export default function IpDetails({ geoData }: any) {
  const data = geoData;

  return (
    <div className="w-full flex justify-between py-6">
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
