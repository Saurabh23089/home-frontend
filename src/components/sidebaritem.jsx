const SidebarItem = ({ icon, label, active }) => (
    <p className={`inline-flex gap-4 items-center text-white w-3/5 px-4 rounded-xl h-10 ${active ? 'bg-[#4338ca]' : 'hover:bg-[#4338ca]'} cursor-pointer`}>
      {icon}
      {label}
    </p>
  );
  
  export default SidebarItem;
  