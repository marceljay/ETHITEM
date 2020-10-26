var Menu = React.createClass({
    componentDidMount() {
        this.controller.loadData();
    },
    onSelection(e) {
        e && e.preventDefault && e.preventDefault(true) && e.stopPropagation && e.stopPropagation(true);
        var _this = this;
        _this.setState({selected : e.currentTarget.dataset.index}, function() {
            _this.props.onSelection(_this.state.menu[_this.state.selected].module);
        });
    },
    render() {
        var _this = this;
        return (
            <section>
                <a className="logo"><img src="assets/img/logo.png"></img><span className="BrandizedSS"> ETHITEM</span></a>
                {this.state && this.state.menu && this.state.menu.map((it, i) => 
                    <section key={it.module}>
                            <a href="javascript:;" data-index={i} className={"MenuItem" + ((i + "") === (this.state.selected + "") ? " Selected" : "")} onClick={_this.onSelection}>{it.name}</a>
                    </section>)}
                <section className="search">
                    <input type="search"></input>
                    <a>SEARCH</a>
                </section>
                <a className="connectWallet">Connect</a>
            </section>);
    }
});