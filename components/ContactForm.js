var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },

    render: function() {
        return (
            <form className="contactForm">
                <label htmlFor="firstname">First name</label>
                <input type="text" id="firstname" placeholder="Imię" value={this.props.contact.firstName} />
                <label htmlFor="lastname">Last name</label>
                <input type="text" id="lastname" placeholder="Nazwisko" value={this.props.contact.lastName} />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Email" value={this.props.contact.email} />
                <button type="submit">Dodaj kontakt</button>
            </form>
        );
    }
})