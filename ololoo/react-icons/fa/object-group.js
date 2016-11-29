
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaObjectGroup extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m40 10h-2.5v20h2.5v7.5h-7.5v-2.5h-25v2.5h-7.5v-7.5h2.5v-20h-2.5v-7.5h7.5v2.5h25v-2.5h7.5v7.5z m-5-5v2.5h2.5v-2.5h-2.5z m-32.5 0v2.5h2.5v-2.5h-2.5z m2.5 30v-2.5h-2.5v2.5h2.5z m27.5-2.5v-2.5h2.5v-20h-2.5v-2.5h-25v2.5h-2.5v20h2.5v2.5h25z m5 2.5v-2.5h-2.5v2.5h2.5z m-12.5-20h7.5v15h-17.5v-5h-7.5v-15h17.5v5z m-15 7.5h12.5v-10h-12.5v10z m20 5v-10h-5v7.5h-7.5v2.5h12.5z"/></g>
            </IconBase>
        );
    }
}
