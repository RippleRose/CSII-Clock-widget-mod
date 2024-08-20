import React from "react";
import classNames from 'classnames'
import { useClock } from 'react-use-clock';
import { Button, Panel, FormattedText } from "cs2/ui";
import { getModule, ModuleRegistryExtend } from "cs2/modding";
import { Theme } from "cs2/bindings";
import styles from './clock-button.module.css'

export interface Props {

}

// Getting the vanilla theme css for compatibility
const FormattedTextTheme: Theme | any = getModule(
    "game-ui/common/text/formatted-text.module.scss",
    "classes"
);

export const ClockButtonCmp: React.FC<Props> = () => {
    const clock = useClock()

    return (
        <>
            <FormattedText
                text={`${clock.hours.toString().padStart(2, '0')}:${clock.minutes.toString().padStart(2, '0')}`}
                id="clock-mod-clock"
                className={classNames(FormattedTextTheme.p, styles.clock)} />
        </>
        
    )
}

export const ClockButton: ModuleRegistryExtend = (Component) => {
    
    return props => {
        const { children, ...otherProps } = props || {};

        return (
            <>
                <Component {...otherProps}></Component>
                <ClockButtonCmp />
            </>
        )
    }
}
