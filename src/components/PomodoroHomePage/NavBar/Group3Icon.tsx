import { memo, SVGProps } from 'react';

const Group3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 23' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M7.27825 22.3359C7.20559 22.3331 7.13293 22.3303 7.02913 22.2953C6.92914 21.9753 6.70791 22.0188 6.49829 22.0371C6.46982 22.0352 6.44136 22.0332 6.38165 22.004C6.20904 21.9004 6.06767 21.824 5.9263 21.7476C5.58415 21.5868 5.21088 21.4696 4.90639 21.256C4.2947 20.8267 3.6888 20.3786 3.14157 19.8732C2.74975 19.5113 2.44878 19.0499 2.12294 18.6211C1.82533 18.2295 1.53998 17.8278 1.2693 17.4176C1.20368 17.3181 1.21705 17.1673 1.19472 16.9836C1.10207 16.8197 1.0088 16.7124 0.915532 16.6051C0.910427 16.5578 0.905322 16.5105 0.905387 16.4097C0.924628 16.1487 0.862747 15.9952 0.627787 15.9647C0.621812 15.8961 0.615837 15.8274 0.615347 15.7002C0.625756 15.38 0.681947 15.092 0.3018 15.0269C0.297649 14.9291 0.293499 14.8312 0.298399 14.6767C0.291827 14.168 0.29163 13.7146 0.24924 13.265C0.239215 13.1587 0.0873896 13.0656 0.000793562 12.9664C-0.000815405 12.6109 -0.00242487 12.2554 0.0224282 11.8588C0.117061 11.7439 0.239308 11.6735 0.244523 11.5954C0.275607 11.1302 0.279664 10.6632 0.292794 10.1968C0.29373 10.1219 0.294666 10.047 0.324268 9.93975C0.729104 9.80675 0.625075 9.52869 0.589846 9.27604C0.594081 9.20122 0.598316 9.1264 0.629587 9.01588C0.868978 8.87958 0.938195 8.71528 0.876858 8.49288C1.01394 8.15079 1.11991 7.79216 1.29393 7.46969C1.82465 6.48622 2.52334 5.62431 3.33701 4.85776C3.60277 4.60739 3.90917 4.39949 4.24392 4.16948C4.63767 4.12413 4.81511 3.91311 4.87647 3.5867C5.02268 3.52301 5.17112 3.46387 5.31471 3.39481C5.83677 3.1437 6.3501 2.87318 6.88103 2.6424C7.17793 2.51336 7.50302 2.44819 7.87788 2.35731C8.17714 2.35034 8.45076 2.41841 8.53477 2.08439C8.79303 2.07699 9.05129 2.06959 9.37007 2.06274C9.52391 2.0032 9.69276 1.94933 9.69839 1.88202C9.73681 1.42266 9.86837 0.951269 9.6098 0.509776C9.73141 0.345123 9.85302 0.18047 10.0281 0.00441848C10.4766 -0.00320504 10.8716 0.000569901 11.2667 0.0043446C11.5048 0.166273 11.5913 0.393975 11.5867 0.67514C11.5819 0.970731 11.6022 1.26664 11.6056 1.56247C11.6094 1.89069 11.7534 2.03039 12.1014 2.07162C12.6914 2.14153 13.3024 2.20534 13.8508 2.41207C14.5876 2.68979 15.2897 3.07265 15.975 3.46487C16.4158 3.71719 16.7951 4.07391 17.2127 4.36902C17.3114 4.4388 17.4529 4.44905 17.6286 4.48567C17.7808 4.38593 17.8791 4.2872 17.9773 4.18848C17.9773 4.18848 17.9941 4.20425 18.0125 4.19408C18.1073 4.08998 18.1837 3.99604 18.2601 3.9021C18.2601 3.9021 18.2598 3.89895 18.2808 3.89657C18.3421 3.83083 18.3825 3.76747 18.423 3.7041C18.4775 3.65909 18.532 3.61408 18.6422 3.56745C19.0658 3.56572 19.4337 3.5656 19.8015 3.56548C19.8015 3.56548 19.7969 3.57029 19.8035 3.59278C19.9171 3.93021 20.0242 4.24513 20.1314 4.56005C20.146 4.81776 20.0201 4.97874 19.8255 5.15219C19.5033 5.4393 19.2362 5.78732 18.9556 6.09895C19.2174 6.47176 19.4864 6.80314 19.697 7.16774C19.9599 7.62287 20.2003 8.09479 20.4029 8.57902C20.6035 9.05826 20.747 9.56122 20.911 10.0552C20.9517 10.1778 20.992 10.3044 21.0039 10.4318C21.0665 11.1024 21.1855 11.7763 21.159 12.4442C21.129 13.1984 20.9661 13.9476 20.8586 14.6987C20.847 14.7795 20.8082 14.857 20.8006 14.9377C20.7397 15.5899 20.4926 16.1769 20.1742 16.7411C19.8261 17.358 19.5581 18.0371 19.1194 18.5814C18.5489 19.2894 17.8577 19.905 17.1923 20.533C16.8684 20.8387 16.4908 21.0904 16.1259 21.3504C15.9499 21.4758 15.7508 21.5717 15.5553 21.6668C15.2956 21.7932 15.0292 21.9057 14.7068 22.0196C14.1886 22.1317 13.7266 22.2393 13.2729 22.3744C13.2007 22.3958 13.166 22.5412 13.114 22.6293C13.0387 22.6346 12.9634 22.6398 12.836 22.6367C12.3216 22.6431 11.8577 22.6407 11.3981 22.684C11.2715 22.6959 11.1579 22.8442 11.0384 22.9299C10.7272 22.9304 10.416 22.931 10.0648 22.904C9.89543 22.5624 9.61582 22.6805 9.35257 22.6575C8.96123 22.6535 8.60253 22.6498 8.24382 22.646C8.16986 22.643 8.09591 22.6399 7.98747 22.6104C7.83282 22.2207 7.53951 22.3212 7.27825 22.3359ZM9.43644 13.6325C9.5404 13.7212 9.64436 13.8099 9.76209 13.9491C9.98781 14.2578 11.0046 14.3048 11.2326 14.0152C11.253 13.9894 11.254 13.9485 11.3169 13.9043C11.425 13.8617 11.5501 13.8409 11.6383 13.7728C12.1654 13.3662 12.3972 12.2063 12.0546 11.6262C11.9483 11.4462 11.7681 11.309 11.6164 11.0962C11.592 10.7188 11.5496 10.3416 11.5467 9.964C11.5374 8.74452 11.5445 7.52493 11.5407 6.3054C11.54 6.07111 11.5631 5.81718 11.2661 5.6484C11.265 5.3016 11.0577 5.12028 10.741 5.10057C10.4674 5.08354 10.1141 4.97458 9.97617 5.42708C9.90106 5.54615 9.77814 5.65883 9.7609 5.78564C9.72623 6.04072 9.74717 6.30351 9.74867 6.5631C9.75679 7.96691 9.76598 9.37071 9.76484 10.827C9.70827 10.9226 9.65869 11.0232 9.59373 11.1129C9.43511 11.3318 9.26937 11.5456 9.05435 11.7733C8.77652 11.9624 8.68792 12.8777 8.93992 13.198C9.06362 13.3553 9.24432 13.4684 9.43644 13.6325Z'
      fill='#747474'
    />
  </svg>
);

const Memo = memo(Group3Icon);
export { Memo as Group3Icon };