(let [m 1000 
      zm (fn [x y] 
             (zero? (mod x y)))] 
     (->> m 
          (range 1) 
          (filter #(or (zm % 3) 
                       (zm % 5))) 
          (apply +)))