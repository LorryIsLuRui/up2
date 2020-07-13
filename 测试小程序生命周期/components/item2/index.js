//Component Object
Component({
    properties: {
        para:{
            type:String,
            value:'',
            observer: function(){}
        },

    },
    data: {

    },
    methods: {
        
    },
    created: function(){
        console.log('item2 created')
    },
    attached: function(){
        console.log('item2 attached')
    },
    ready: function(){
        console.log('item2 ready')
    },
    moved: function(){
        console.log('item2 moved')
    },
    detached: function(){
        console.log('item2 detached')
    },
});