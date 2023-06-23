type IFruit = {
   fruitId: number,
   fruitName: string,
   fruitType: 'IMPORT' | 'LOCAL',
   stock: number
   }
   const fruits: IFruit[] = [
   {
   fruitId: 1,
   fruitName: 'Apel',
   fruitType: 'IMPORT',
   stock: 10
   },
   {
   fruitId: 2,
   fruitName: 'Kurma',
   fruitType: 'IMPORT',
   stock: 20
   },
   {
   fruitId: 3,
   fruitName: 'apel',
   fruitType: 'IMPORT',
   stock: 50
   },
   {
   fruitId: 4,
   fruitName: 'Manggis',
   fruitType: 'LOCAL',
   stock: 100
   },
   {
   fruitId: 5,
   fruitName: 'Jeruk Bali',
   fruitType: 'LOCAL',
   stock: 10
   },
   {
   fruitId: 5,
   fruitName: 'KURMA',
   fruitType: 'IMPORT',
   stock: 20
   },
   {
   fruitId: 5,
   fruitName: 'Salak',
   fruitType: 'LOCAL',
   stock: 150
   }
   ]
   
   //** no.1 */
   //Mapping fruit names
   const fruitNameMap = fruits.map(data => data.fruitName)
   //change the fruit names to all lowercase
   const namaBuah = fruitNameMap.map(e => e.toLowerCase())
   //sorting fruit names so that there are no duplicate objects
   let namaSortBuah = [...new Set(namaBuah)]
   console.log("Nama-nama Buah : ",namaSortBuah)

   console.log("Total Buah : " ,namaSortBuah.length)
   
   console.log("Total Jenis Buah : " ,fruitNameMap.length)
   
   /*no. 2 */
   //mapping fruit types
   const fruitTypeMap = fruits.map(data=> data.fruitType)
   //separate according to the type of fruit
   let sortTypeBuah = [...new Set(fruitTypeMap)]
   console.log (sortTypeBuah);
   console.log ("banyak wadah : " ,sortTypeBuah.length)
   
   /* no. 3 */
   //total fruit per container
     let totalTypeFruits = sortTypeBuah.map(value => [value, fruitTypeMap.filter(str => str === value).length]);
     console.log ("masing-masing wadah :" , totalTypeFruits);
   
   
     /* Komentar untuk soal ini */
     /* Mungkin harus di pisahkan jenis buah secara identik,
     di karenakan ada nama buah yang sama namun berbeda ID dan Jumlah.. 
     ex :
      ada 2 tipe data "kurma",
     sehingga pembagian jenis wadah bisa benar" detail, tidak ada yang keliru
     mungkin bisa di bedakan jenis kurmanya 
     ex :
      nama buah : Kurma
      jenis buah : Kurma Tunis
      tipe buah : IMPORT
   
       nama buah : Kurma
      jenis buah : Kurma Ajwa
      tipe buah : IMPORT
   
      nama buah : Apel
      jenis buah : Apel Queen
      tipe buah : IMPORT
   
       nama buah : Mangga
      jenis buah : Mangga Madu
      tipe buah : LOCAL
   
         nama buah : Mangga
      jenis buah : Mangga Dodol
      tipe buah : LOCAL
   
      */
     
   
   
   
   
   
      
   
   
   