import React,{useState,useEffect} from 'react';


function TabComponent({activeTab}) {
    const [active, setActive] = useState(activeTab);
    useEffect(() => {
        setActive(activeTab);
    }, [activeTab]);
  return (
    <div>
    {/* sections */}
    <div className='flex justify-between text-lg font-bold text-tabText'>
        <h1 className={`${active === 1 ? 'tabTextSelected' : ''}`}>Personal</h1>
        <span className={`${active === 2 ? 'tabTextSelected' : ''}`}>Bio</span>
        <span className={`${active === 3 ? 'tabTextSelected' : ''}`}>Contact</span>
        <span className={`${active === 4 ? 'tabTextSelected' : ''}`}>Location</span>
    </div>
    {/* underline */}
    <div className='w-full tabUnderline mt-1'></div>
</div>
  )
}

export default TabComponent;