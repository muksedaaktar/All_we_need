import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from "recharts";

const ratingsData = [
  { name: "5 star", value: 12000 },
  { name: "4 star", value: 9000 },
  { name: "3 star", value: 5000 },
  { name: "2 star", value: 3000 },
  { name: "1 star", value: 1500 },
];

const Rechart = () => {
  return (
    <div className="w-full h-80">
      <h2 className="text-xl font-semibold mb-2">Ratings</h2>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={ratingsData}
          layout="vertical"
          margin={{ top: 10, right: 20, left: 30, bottom: 10 }}
        >
          <YAxis
            dataKey="name"
            type="category"
            tick={{ fontSize: 14 }}
            width={70}
          />
          <XAxis
            type="number"
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip />
          <Bar dataKey="value" barSize={20} radius={[0, 10, 10, 0]}>
            {ratingsData.map((entry, index) => (
              <Cell key={index} fill="#FF6F28" />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Rechart;