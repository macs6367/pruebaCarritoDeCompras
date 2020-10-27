import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private lengthCarrito = new Subject<number>();

  // Observable string streams
  lengthCarrito$ = this.lengthCarrito.asObservable();

  public productoCarrito: any[] = JSON.parse(localStorage.getItem('objCarrito')) || [];

  constructor(private firestore: AngularFirestore) {}

  addProducto(producto: any): Promise<DocumentReference> {
    return this.firestore.collection('products').add(producto);
  }

  getProductos(): any {
    return this.firestore
      .collection('products', (ref) => ref.where('estado', '==', true))
      .snapshotChanges()
      .pipe(
        map((actions: any[]) =>
          actions.map((a) => {
            const data: any = a.payload.doc.data() as any;
            const id = a.payload.doc.id;
            return { ...data, id };
          })
        )
      );
  }

  addCarrito(): Promise<DocumentReference> {
    return this.firestore.collection('carts').add({ status: 'pending' });
  }

  addProductoCarrito(productoCarrito: any): Promise<DocumentReference> {
    return this.firestore.collection('product_cars').add(productoCarrito);
  }

  observaLength(numero): void {
    this.lengthCarrito.next(numero);
  }

  getAllProductos(): any {
    return this.firestore
      .collection('products')
      .snapshotChanges()
      .pipe(
        map((actions: any[]) =>
          actions.map((a) => {
            const data: any = a.payload.doc.data() as any;
            const id = a.payload.doc.id;
            return { ...data, id };
          })
        )
      );
  }

  deleteProduct(id): Promise<void>{
    return this.firestore.collection('products').doc(id).delete();
  }

  updateProduct(product): Promise<void>{
    return this.firestore.collection('products').doc(product.id).update(product);
  }
}
