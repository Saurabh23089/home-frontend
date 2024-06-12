const TeamItem = ({ initial, name }) => (
    <p className="inline-flex gap-2 hover:bg-[#4338ca] p-2 rounded-xl w-3/5 cursor-pointer">
      <span className="border px-2 rounded-lg border-[#818cf8]">{initial}</span>
      {name}
    </p>
  );
  
  export default TeamItem;
  