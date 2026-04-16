export default function Timer({
  endTime,
  now,
}: {
  endTime: Date;
  now: number;
}) {
  const diff = endTime.getTime() - now;

  if (diff <= 0) {
    return <span>Finished</span>;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const seconds = totalSeconds % 60;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const hours = Math.floor(totalSeconds / 3600);

  const format = (n: number) => String(n).padStart(2, "0");

  return (
    <>
      {format(hours)}:{format(minutes)}:{format(seconds)}
    </>
  );
}
