
interface navbarItemProps{
    label:string,
}
const NavbarItems: React.FC<navbarItemProps>=({
    label
})=>{
    return(
        <div className="font-medium text-white cursor-pointer hover:text-gray-300 transition">
            {label}
        </div>
    )
}
export default NavbarItems;