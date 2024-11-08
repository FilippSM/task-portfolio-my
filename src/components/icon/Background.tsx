import iconsSprite from "../../assets/images/icons-sprite.svg"

type BgPropsType = {
    iconId: string

}

export const Background = (props: BgPropsType ) => {
    return (
        <svg width="720" height="629" viewBox="0 0 720 629" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    );
};