import Link from 'next/link'

function ProductCard({ item }) {
    return <Link href={"/product/" + item.id}>
      <a>
        {item.image_front_small_url ? <img src={item.image_front_small_url} alt={item.product_name} />
          : <img src="/picture-missing.jpg" alt="Pas d'image produit" width={100} height={100} />}
        {item.product_name ? item.product_name : 'Nom du produit manquant'}
      </a>
    </Link>
  }

export default ProductCard;