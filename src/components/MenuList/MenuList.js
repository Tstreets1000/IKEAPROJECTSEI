//import styles from menu list
import styles from './MenuList.module.scss';
//import menulistitem
import MenuListItem from '../MenuListItem/MenuListItem';


//export default function for menulist
export default function MenuList({menuItems, handleAddToOrder}) {
    const items = menuItems.map(item =>
        <MenuListItem
        key={item._id}
        handleAddToOrder={handleAddToOrder}
        menuItem={item}
        />
        );
        return (
        <main className={styles.MenuList}>
            {items}
        </main>
        );
}