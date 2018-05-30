var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render: function() {
        return (
        <div className={'contactItem'}>
            <img 
                className={'contactImage'} 
                src={'https://www.freeiconspng.com/uploads/person-outline-icon-png-person-outline-icon-png-person-17.png'} 
                alt={'contact img'} 
            />
            <p className={'contactLabel'}>
                Imię: {this.props.item.firstName} 
            </p>
            <p className={'contactLabel'}>
                Nazwisko: {this.props.item.lastName}
            </p>
            <a href={'mailto:' + this.props.item.email}>{this.props.item.email}</a>
        </div>
        )
    }
});