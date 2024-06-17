import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

<p>Copyright © 2015-{currentYear} Spark English Institute. All rights reserved.</p>

        </div>
        </section>
  )
}

export default Footer