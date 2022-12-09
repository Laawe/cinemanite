import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import styles from './custom-link.module.css';

export const CustomLink = ({ label, href, srcIcon, isEmoji }) => {
    return (
        <div className={styles['custom-link-wrapper']}>
            {srcIcon && (
                <Image
                    className={styles['custom-link-image']}
                    width={50}
                    height={50}
                    src={srcIcon}
                    alt="Custom link with icon"
                />
            )}
            {
                isEmoji && (
                    <span className={styles['custom-link-emoji']} role="img" aria-label="dynamic emoji">{isEmoji}</span>
                )
            }
            <Link href={href} className={styles['custom-link-L']}>
                {label}
            </Link>
        </div>
    )
}
