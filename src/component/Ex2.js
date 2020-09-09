import React, {Component} from 'react';
import {withTranslation} from 'react-i18next';
import i18n from '../lang/i18n';

class Ex2 extends Component {
    render() {
        const {t} = this.props;
        return (
            <div>
                <div>{t('hello')}</div>
                <div>
                    <button onClick={() => {i18n.changeLanguage('en-US')}}>English</button>
                    <button onClick={() => {i18n.changeLanguage('ko-KR')}}>Korean</button>
                    <button onClick={() => {i18n.changeLanguage('???')}}>Other</button>
                </div>
            </div>
        )
    }
}

export default withTranslation()(Ex2);