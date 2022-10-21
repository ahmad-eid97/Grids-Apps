import cls from './loader.module.scss';

const Loader = () => {
  return (
    <div className={cls.preloader}>
      <div className={cls["preloader-inner"]}>
        <div className={cls.domino}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Loader