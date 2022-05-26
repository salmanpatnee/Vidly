import React from 'react';

const Like = ({isLiked, onClick}) => {

    let classes = "clickable fa fa-heart";

    if (!isLiked) classes += "-o";

    return (<i
        onClick={onClick}
        className={classes}
        aria-hidden="true"></i>);
}

export default Like;