
import styles from './Layout.module.css';
import MainNavigation from "./MainNavigation";

export default function(props){
    return(
        <div>
            <MainNavigation/>
            <main className={styles.main}> {props.children} </main>
        </div>
        
    );
}