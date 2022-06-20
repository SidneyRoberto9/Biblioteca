import './modal-info.scss';
import 'react-responsive-modal/styles.css';

import React from 'react';
import { Modal } from 'react-responsive-modal';

import { useBook } from '../../hooks/useBook';

interface ModalProps {
  open: boolean;
  closeModal: () => void;
}

export const ModalInfo = ({ open, closeModal }: ModalProps) => {
  const { actualBook } = useBook();
  let temp_book: any = [];

  if (actualBook) {
    temp_book = [
      {
        name: 'Autores',
        info: actualBook.volumeInfo.authors,
      },
      {
        name: 'Editora',
        info: actualBook.volumeInfo.publisher,
      },
      {
        name: 'Ano',
        info: actualBook.volumeInfo.publishedDate,
      },
      {
        name: 'Páginas',
        info: actualBook.volumeInfo.pageCount,
      },
      {
        name: 'Categorias',
        info: actualBook.volumeInfo.categories,
      },
      {
        name: 'Linguagem',
        info: actualBook.volumeInfo.language,
      },
    ];
  } else {
    return null;
  }

  return (
    <div>
      <Modal open={open} onClose={closeModal} center>
        <h2>{actualBook.volumeInfo.title}</h2>

        <div className="content">
          {temp_book.map((item: any) => {
            return (
              <>
                <span>
                  {item.info && (
                    <>
                      <b>{item.name}: </b>
                      {item.info}
                    </>
                  )}
                </span>
              </>
            );
          })}

          <a
            target="_blank"
            href={actualBook.volumeInfo.infoLink}
            rel="noreferrer"
          >
            Info Link
          </a>
        </div>
      </Modal>
    </div>
  );
};
