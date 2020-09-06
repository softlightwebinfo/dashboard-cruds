import React, { Component } from 'react';
import PropTypes from 'prop-types';

export type clickOutsideProps = {
    onClickOutside: (e: any) => void;
    className?: string;
};

export class ClickOutside extends Component<clickOutsideProps> {
    static propTypes = {
        onClickOutside: PropTypes.func.isRequired,
    };

    componentDidMount() {
        window.addEventListener('click', this.handleClickOutside, true);
        document.addEventListener('keydown', this.escFunction, false);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.handleClickOutside, true);
        document.removeEventListener('keydown', this.escFunction, false);
    }

    private wrappedComponent;

    escFunction = (event) => {
        if (event.keyCode === 27) {
            const { onClickOutside } = this.props;
            onClickOutside(event);
        }
    };

    handleClickOutside = (event) => {
        const { onClickOutside } = this.props;
        const element = this.wrappedComponent;
        if (!element.contains(event.target)) {
            onClickOutside(event);
        }
    };

    render() {
        return (
            <div
                className={ this.props.className }
                ref={ (ref) => {
                    this.wrappedComponent = ref;
                } }
            >
                { this.props.children }
            </div>
        );
    }
}
