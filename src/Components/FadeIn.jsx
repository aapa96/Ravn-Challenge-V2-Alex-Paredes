import React from 'react';
import '../styles/components/fadeIn.scss';

export function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
        let isHere = true;
        if (isHere) {
            var observer = new IntersectionObserver(entries => {
                entries.forEach(entry => setVisible(entry.isIntersecting));
            });
            observer.observe(domRef.current);
        }
        return () => {
            isHere = false;
            observer.disconnect()
        };
    }, []);
    return (
        <div
            className={`fade_in_section ${isVisible ? 'is_visible' : 'fade_in_section'}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}
