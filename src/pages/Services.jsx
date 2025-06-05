import styles from "./Services.module.css";

export default function Services() {
  return (
    <div className={styles.containerBody}>

      {/* Section qui contient tous les services du salon */}
      <section className={styles.servicesSection}>
        <div className={styles.service}>
          <div className={styles.serviceImg}>
            <img src="/img/Coiffure_Service.jpg" alt="Coiffure et coupe de cheveux"/>
          </div>
          <div className={styles.serviceText}>
            <h2>Coiffure & Coupe de cheveux</h2>
            <p>Au Salon Boréal, on fait des coupes pour adults, enfants et ados, que ce soit quelque chose de classique, 
              moderne ou créatif. On prend le temps d’écouter ce que tu veux vraiment, pour que tu ressortes avec une coupe qui 
              te fait sentir bien. 
              </p><p>
                Que tu veuilles juste couper les pointes ou changer complètement de tête, on est là pour te conseiller 
              et trouver le style qui te va le mieux. On s’adapte à tes cheveux, à ton visage et à ton style. On utilise aussi des bons produits 
              pour garder tes cheveux en santé et beaux plus longtemps. Chez nous, c’est relax, on veut que tu te sentes à l’aise du début à la fin.
            </p>
          </div>
        </div>

        <div className={`${styles.service} ${styles.reverse}`}>
          <div className={styles.serviceImg}>
            <img
              src="/img/Couleur.jpeg"
              alt="Coloration et balayage"
            />
          </div>
          <div className={styles.serviceText} id="coloratio">
            <h2>Coloration & Balayage</h2>
            <p>
              Au Salon Boréal, on fait des colorations et des balayages pour donner un nouveau style à tes cheveux ou juste les rendre plus lumineux. 
              Que tu veuilles quelque chose de naturel ou essayer une nouvelle couleur, on est là pour t’aider à choisir ce qui te va le mieux. </p><p>
              On prend le temps de t’écouter, on utilise des bons produits qui respectent tes cheveux, puis on fait ça dans une ambiance chill. 
              Que ce soit pour cacher des repousses, ajouter de la lumière ou changer de tête, on s’arrange pour que tu sortes du salon en te sentant bien 
              et en aimant le résultat.
            </p>
          </div>
        </div>

        <div className={styles.service}>
          <div className={styles.serviceImg}>
            <img
              src="/img/Rallonges.jpg"
              alt="Rallonges capillaires"
            />
          </div>
          <div className={styles.serviceText}>
            <h2>Rallonges capillaires</h2>
            <p>
              Tu veux des cheveux plus longs ou plus de volume ? Au Salon Boréal, on pose des rallonges capillaires de façon pro, pour que ça ait l’air naturel et 
              que ça tienne bien. 
              </p><p>Que ce soit pour un look plus glamour ou juste pour te sentir mieux avec tes cheveux, on est là pour t’aider à choisir ce qui te 
              convient le plus. On utilise des rallonges de qualité, puis on prend le temps de bien les poser pour que ce soit confortable et beau. 
              Le but, c’est que tu ressortes avec des cheveux de rêve et un sourire en plus.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}