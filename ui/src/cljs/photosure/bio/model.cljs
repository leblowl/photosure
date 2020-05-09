(ns photosure.bio.model)

(def bio-html
  (str "My name is Charles Leblow."
       "<br><br>"

       "Photography has been a passion dating back to childhood."
       "<br><br>"

       "I specialize in landscape and urban photography as well as"
       " family photography in informal settings or at your home."
       " My work is done in 35mm format, primarily digital and also"
       " film, black and white, or custom editing options are available."
       "<br><br>"

       "I am located in the San Francisco/Bay Area of California and"
       " am available for local hire for family events/portraits/informal"
       " photo shoots, small weddings, proms and parties, no job is too small."
       "<br><br>"

       "Prints of my work are available only by special order."
       " Please inquire for sizing, pricing, paper, and matting or framing options."
       "<br><br>"

       "I could supply you with more written details about my skills as a"
       " photographer but I would prefer you judge me by my work,"
       " a sampling of which is available above in the Gallery, and not my"
       " writing skills."
       "<br><br><br>"

       "cpleblow"))

(def bio-model
  {:selfie-src "/img/bio/me.jpg"
   :about bio-html
   :shares
   [{:name "facebook"
     :entity "&#xe606;"
     :class "icon-facebook"
     :href "https://www.facebook.com/cpleblow"}

    {:name "tumblr"
     :entity "&#xe607;"
     :class "icon-tumblr1"
     :href "http://cpleblow.tumblr.com/"}

    {:name "email"
     :entity "&#xe603;"
     :class "icon-mail"
     :href "mailto:tableof_5@comcast.net?Subject=cpleblow Photography"}]})
