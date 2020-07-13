Component({
    properties: {
        val: {
            type: String,
            value: 'hh0'
        }
    },
    lifetimes: {
        created: function(){
            console.log(this.data.val + ' item component created');
        },
        attached: function(){
            console.log(this.data.val + ' item component attached');
        },
        ready: function(){
            console.log(this.data.val + ' item component ready');
        },
        moved: function(){
            console.log(this.data.val + ' item component moved');
        },
        detached: function(){
            console.log(this.data.val + ' item component detached');
        }
    },
    pagelifetimes: {
        show: function(){
            console.log(this.data.val + ' item component pageLifetimes show')
        },
        resize: function(){
            console.log(this.data.val + ' item component pageLifetimes resize')
        },
        hide: function(){
            console.log(this.data.val + ' item component pageLifetimes hide')
        }
    }
})