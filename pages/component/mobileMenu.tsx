import React from "react";

interface MobileMenuProps {
  visible?: boolean;
}
const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }
  return (
    <div className="bg-black w-56 absolute top-8 py-5 left-0 px-5 flex-col border-2 border-gray-600">
      <div className="flex flex-col gap-4">
        <div className="px-3 text-center text-white hover:underling">Home</div>
        <div className="px-3 text-center text-white hover:underling">Series</div>
        <div className="px-3 text-center text-white hover:underling">Film</div>
        <div className="px-3 text-center text-white hover:underling">New & Popular</div>
        <div className="px-3 text-center text-white hover:underling">My List</div>
        <div className="px-3 text-center text-white hover:underling">Browse by Language</div>
      </div>
      
    </div>
  );
};
export default MobileMenu;
