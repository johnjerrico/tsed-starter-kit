export interface Collection {
    data: Array<any>;
    total: number;
}

export class CollectionHelper { 
    static format(data:Array<any>) {
        let temp:Collection = {data:[],total:-1}; 
        data.forEach( (x:any) => {
            if (Array.isArray(x)) {
                temp.data = x; 
            } else if(typeof(x) === "number") { 
                temp.total = x;
            }
        });
        return temp.data !== undefined ? temp : {data, total:-1};
    }

    static copyDeep(base, names, value) {
        var lastName = names.pop();
        // Walk the hierarchy, creating new objects where needed.
        // If the lastName was removed, then the last object is not set yet:
        for( var i = 0; i < names.length; i++ ) {
            base = base[ names[i] ] = base[ names[i] ] || {};
        }
    
        // If a value was given, set it to the last name:
        if( lastName ) { 
            base = base[ lastName ] = value;
        }
    
        // Return the last object in the hierarchy:
        return base;
    };

    static formatByRequest(format, result) {
        result = CollectionHelper.format(result);
        if (format === undefined) {
            return result;
        } else {
            return { data: result.data.map(x => {
                let newObject:any = {};
                let tempObject:any = {};
                format.forEach(props => {
                    let temp = x;
                    const props_arr = props.split('.');
                    props_arr.forEach((prop, i) => {
                        if (temp[prop] !== null && temp[prop] !== undefined) {
                            temp = temp[prop];
                        }
                    });
                    if (props_arr.length > 1) {
                        CollectionHelper.copyDeep(newObject,props_arr,temp);
                    } else {
                        newObject[props_arr[0]] = temp; 
                    }
                });
                return newObject;
            }), total: result.total};
        } 
    }
}