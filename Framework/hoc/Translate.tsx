import { Component } from 'react';
import * as React from 'react';
import { connect } from 'react-redux';
// @ts-ignore
import { Router } from '@routes';

export function Translate(WrappedComponent) {
    // @ts-ignore
    @connect((state: any) => ({
        translate: state.translate,
        translation: state.translate.translation,
    }))
    class Index extends Component<{
        translate: any;
        translation: any;
    }> {
        constructor(props) {
            super(props);
        }

        getTranslationKey = (key: string, defaultTranslation: string = "") => {
            return key in this.props.translation ? this.props.translation[key] : defaultTranslation;
        }

        render() {
            return <WrappedComponent {...this.props} getTranslationKey={this.getTranslationKey}/>;
        }
    }

    return Index;
}
