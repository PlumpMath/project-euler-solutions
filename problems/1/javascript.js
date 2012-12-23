(function(s,e) {
  var l,q=[s];
  do { 
    l=q.pop();
    if(l<e){
      q.push(l,l+1);
    } else {
      return q;
    }}while(true);
  })(1,1000)
.filter(function(e){return 0===e%3||0===e%5;})
.reduce(function(p,c){return p+c;})

/*******************************************************
 * Crazy that there's no range built-in even for ECMA 5.
 * I used this imperative version of range because the
 * performance for a functional (even TCO) version is 
 * drammatically worse... then i got lazy and used the
 * ECMA 5 filter and reduce built-ins
 ********************************************************/
