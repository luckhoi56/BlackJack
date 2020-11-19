function m_count_map(s){
    let m = new Map()
    /*
        1.check to see if the maps has key
            ->if has no key, set the new key with value =1
        2.if key exists,
    
    */
    for (c of s){
        if(s.has(key)!=true){
            m.set(c,1)
        }
        else{         
            m.set(c,m.get(c)+1)
        }
    }
    return m
}
function commonCharacterCount(s1, s2) {
    var m_count = 0
    var map_1 = m_count_map(s1)
    var map_2 = m_count_map(s2)
    for(c of s1){
        if(map_2.has(c))
            m_count += Math.min(map_2.get(c), map_1.get(c))
    }
    return m_count
}
