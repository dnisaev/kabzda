import React from 'react';

type PageTitleProps = {
    title: string
}
export function PageTitle(props: PageTitleProps) {
    return ( <h3>{props.title}</h3> )
}