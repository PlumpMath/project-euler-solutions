(let [fit (fn [s] (conj s (+ (-> s pop last) (last s))))
      fiter (fn fiter [lim so]
              (let [sn (fit so)]
                (if (> (last sn) lim)
                    so
                    (fiter lim sn))))]
  (apply + (filter #(even? %)
                   (fiter 4000000 [1 2]))))